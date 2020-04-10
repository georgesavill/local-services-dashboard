function populateServices(servicesJson) {
    for (var i = 0; i < servicesJson["service"].length; i++) {
        var linkToService = document.createElement("a");
        linkToService.innerHTML = servicesJson["service"][i]["name"];
        linkToService.href = servicesJson["service"][i]["url"];
        document.getElementById("content").appendChild(linkToService);
    }
}
populateServices(jsonData);