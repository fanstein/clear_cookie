chrome.contextMenus.create({
        id: "menu",
        title: "Cookie",
        contexts: ["all"],
        // onclick: function(){alert('您点击了右键菜单！');}
    }),
    chrome.contextMenus.create({
        id: "view",
        parentId: "menu",
        title: "View Cookie",
        onclick: function () {
            var cook='';
            chrome.cookies.getAll({},function(cookie) {
                cookie.forEach(function(c){ 
                    cook = cook + c.name + '=' + c.value + ';'
                });
            alert(cook);
            })
        },
        contexts: ["all"]
    }),
    chrome.contextMenus.create({
        id: "separator3",
        parentId: "menu",
        type: "separator",
        contexts: ["all"]
    }),
    chrome.contextMenus.create({
        id: "clear",
        parentId: "menu",
        title: "Clear Cookie",
        onclick: function() {
            alert("clear cookie")
        },
        contexts: ["all"]
    });