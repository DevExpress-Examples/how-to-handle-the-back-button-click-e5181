# How to handle the Back button click


<p>This example demonstrates how to handle the Back button click. The <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Events?version=13_2#navigatingBack"><u>HtmlApplication.navigatingBack</u></a> event allows us to accomplish this task. However, this event handler does not provide information about the current view and its view model. Sometimes it is necessary to perform some actions before navigating. To solve this problem, we declare an additional option in the context of our application - <strong>HtmlApplication.currentViewModel</strong>. This option will store the necessary information about the current view, namely the current view model. The <a href="http://phonejs.devexpress.com/Documentation/ApiReference/Application_Framework/HtmlApplication/Events?version=13_2#viewShown"><u>HtmlApplication.viewShown</u></a> event handler allows you to get a view model of the shown view. We can get this view model and set it to our new option. In this case, we can access the current view model using <strong>HtmlApplication.currentViewModel</strong> and perform necessary actions in the <strong>HtmlApplication.navigatingBack</strong> event handler. Moreover, we can cancel back navigation in this event handler using the cancel option of the event handler argument as shown below:</p>


```js
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

```


<p><br>Starting with 14.2, use the following code:</p>


```js
Application1.app.currentViewModel = null;
Application1.app.on("viewShown", function (e) {
        Application1.app.currentViewModel = e.viewInfo.model;
});
Application1.app.on("navigatingBack", function (e) {
        if (Application1.app.currentViewModel.name == 'View1') {
            if (!confirm("Are you sure you want to leave View1 ?")) {
                e.cancel = true;
                return;
            }
            //Execute the required code
        }
         Application1.app.currentViewModel = null;
});
```


<p><br><br>This code demonstrates how to perform actions when a user clicks the Back button on View1.</p>

<br/>


