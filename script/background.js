chrome.contextMenus.create({
    id:"menu",
    title: "Cookie",
    contexts:["all"],
    // onclick: function(){alert('您点击了右键菜单！');}
}),
chrome.contextMenus.create({
    id:"clear",
    parentId:"menu",
    title:"Clear Cookie",
    onclick:function(){
        alert("chear cookie")
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
    id: "view",
    parentId: "menu",
    title: "view Cookie",
    onclick: function(){
        alert("view cookie")
    },
    contexts: ["all"]
});