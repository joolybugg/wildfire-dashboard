
shadow.cljs.devtools.client.env.module_loaded('main');

try { dashboard.core.init(); } catch (e) { console.error("An error occurred when calling (dashboard.core/init)"); console.error(e); }