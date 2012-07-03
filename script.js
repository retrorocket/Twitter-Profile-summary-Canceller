//console.log("come on!");
$("a").removeClass("twitter-atreply js-account-group js-user-profile-link js-action-profile");
$("strong").removeClass("show-popup-with-id js-action-profile-name");
$("img").removeClass("js-user-profile-link");
$("a").live("mouseup", function(){
	$("a").removeClass("twitter-atreply js-account-group js-user-profile-link js-action-profile");
});
$("strong").live("mouseup", function(){
	$("strong").removeClass("show-popup-with-id js-action-profile-name");
});
$("img").live("mouseup", function(){
	$("img").removeClass("js-user-profile-link");
});

