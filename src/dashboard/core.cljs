(ns dashboard.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; --- Data ---
(def cities
  [{:name "Los Angeles"    :lat 34.05  :lon -118.24}
   {:name "San Francisco"  :lat 37.77  :lon -122.42}
   {:name "Sacramento"     :lat 38.58  :lon -121.49}
   {:name "San Diego"      :lat 32.72  :lon -117.16}
   {:name "Fresno"         :lat 36.74  :lon -119.77}
   {:name "Santa Barbara"  :lat 34.42  :lon -119.70}
   {:name "Redding"        :lat 40.59  :lon -122.39}
   {:name "Bakersfield"    :lat 35.37  :lon -119.02}])

(def weather-codes
  {0  "Clear Sky"
   1  "Mainly Clear"
   2  "Partly Cloudy"
   3  "Overcast"
   45 "Foggy"
   48 "Icy Fog"
   51 "Light Drizzle"
   53 "Drizzle"
   55 "Heavy Drizzle"
   61 "Light Rain"
   63 "Rain"
   65 "Heavy Rain"
   71 "Light Snow"
   73 "Snow"
   75 "Heavy Snow"
   80 "Light Showers"
   81 "Showers"
   82 "Heavy Showers"
   95 "Thunderstorm"
   99 "Thunderstorm w/ Hail"})

;; --- State ---
(def app-state (r/atom {}))

;; --- Helpers ---
(defn temp-color [temp]
  (cond
    (< temp 60)  "#4a90d9"
    (< temp 75)  "#5cb85c"
    (< temp 90)  "#f0ad4e"
    (< temp 105) "#e8622a"
    :else        "#cc0000"))

(defn wind-direction [degrees]
  (let [directions ["N" "NE" "E" "SE" "S" "SW" "W" "NW"]
        index      (Math/round (/ degrees 45))
        idx        (mod index 8)]
    (nth directions idx)))

;; --- API ---
(defn fetch-city [city]
  (let [{:keys [name lat lon]} city
        url (str "https://api.open-meteo.com/v1/forecast"
                 "?latitude=" lat
                 "&longitude=" lon
                 "&current_weather=true"
                 "&temperature_unit=fahrenheit"
                 "&windspeed_unit=mph")]
    (-> (js/fetch url)
        (.then #(.json %))
        (.then #(let [data (js->clj % :keywordize-keys true)
                      w    (:current_weather data)]
                  (swap! app-state assoc name
                         {:temp        (:temperature w)
                          :wind        (:windspeed w)
                          :direction   (:winddirection w)
                          :code        (:weathercode w)
                          :description (get weather-codes (:weathercode w) "Unknown")})))
        (.catch #(swap! app-state assoc name {:error true})))))

(defn fetch-all []
  (doseq [city cities]
    (fetch-city city)))

;; --- Components ---
(defn weather-card [city-name]
  (let [data (get @app-state city-name)]
    [:div {:style {:border        "1px solid #ddd"
                   :border-radius "12px"
                   :padding       "20px"
                   :background    "#fff"
                   :box-shadow    "0 2px 8px rgba(0,0,0,0.08)"
                   :min-width     "180px"}}
     [:h2 {:style {:margin        "0 0 12px"
                   :font-size     "16px"
                   :font-weight   "600"
                   :color         "#333"}} city-name]
     (cond
       (nil? data)
         [:p {:style {:color "#aaa"}} "Loading..."]
       (:error data)
         [:p {:style {:color "red"}} "Failed to load"]
       :else
         [:div
          [:div {:style {:font-size   "36px"
                         :font-weight "700"
                         :color       (temp-color (:temp data))
                         :margin      "0 0 8px"}}
           (str (:temp data) "°F")]
          [:p {:style {:margin "4px 0" :color "#555" :font-size "14px"}}
           (str "💨 " (:wind data) " mph "
                (wind-direction (:direction data)))]
          [:p {:style {:margin "4px 0" :color "#555" :font-size "14px"}}
           (str "🌤 " (:description data))]])]))

(defn app []
  [:div {:style {:font-family    "system-ui, sans-serif"
                 :padding        "40px"
                 :background     "#f5f5f0"
                 :min-height     "100vh"}}
   [:h1 {:style {:margin-bottom "8px"
                 :color         "#222"}} "🔥 Wildfire Weather Dashboard"]
   [:p {:style {:color         "#888"
                :margin-bottom "32px"
                :font-size     "14px"}}
    "Current conditions in high fire-risk California cities"]
   [:div {:style {:display               "grid"
                  :grid-template-columns "repeat(auto-fill, minmax(200px, 1fr))"
                  :gap                   "16px"}}
    (for [city cities]
      ^{:key (:name city)}
      [weather-card (:name city)])]])

(defn init []
  (fetch-all)
  (rdom/render [app] (.getElementById js/document "app")))
