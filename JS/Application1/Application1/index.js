window.Application1 = window.Application1 || {};

$(function() {
    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: Application1.config.navigationType,
        navigation: Application1.config.navigation
    });
    Application1.app.currentViewModel = null;
    Application1.app.viewShown.add(function (e) {
        Application1.app.currentViewModel = e.viewInfo.model;
    });
    Application1.app.navigatingBack.add(function (e) {
        if (Application1.app.currentViewModel.name == 'View1') {
            if (!confirm("Are you sure you want to leave View1 ?")) {
                e.cancel = true;
                return;
            }
            //Execute the required code
        }
        Application1.app.currentViewModel = null;
    });
    Application1.app.router.register(":view/:id", { view: "home", id: undefined });
    Application1.app.navigate();
});
