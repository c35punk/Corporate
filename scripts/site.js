function openTab(tabName) {
    let tabArr = ["vibbek", "pos", "unipos", "auriga",
        "openway", "atm", "stowpal", "sofis", "netapp", "infinidat", "servers",
        "ebulmag", "microsoft", "cpseries", "nutanix", "vmware"];

    if (window.innerWidth <= 991 && tabArr.includes(tabName)) {
        if (tabName === "vibbek") {
            window.open("https://www.vibbek.com/en/product/", "_self");
        } else if (tabName === "sofis") {
            window.open("../docs/SOFIS-HR&PAYROLL.pdf", "_self");
        } else if (tabName === "ebulmag") {
            window.open("https://e-bulmag.bg/", "_self");
        } else if (tabName === "stowpal") {
            window.open("https://stowpal.com/bg", "_self");
        } else if (tabName === "netapp") {
            window.open("https://www.lenovo.com/us/en/data-center/storage/c/storage", "_self");
        } else if (tabName === "infinidat") {
            window.open("https://www.infinidat.com/products-technology/infinibox", "_self");
        } else if (tabName === "servers") {
            window.open("https://www.lenovo.com/us/en/data-center/servers/c/servers", "_self");
        } else if (tabName === "microsoft") {
            window.open("https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-SX-for-Microsoft-Azure-Stack/p/WMD00000272", "_self");
        } else if (tabName === "cpseries") {
            window.open("https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-CP-Series/p/WMD00000362", "_self");
        } else if (tabName === "nutanix") {
            window.open("https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-HX-Series/p/WMD00000326", "_self");
        } else if (tabName === "vmware") {
            window.open("https://www.lenovo.com/us/en/data-center/software-defined-infrastructure/ThinkAgile-VX-Series/p/WMD00000340", "_self");
        } else if (tabName === "pos") {
            window.open("https://tr-sys.com/solution/eft-pos/", "_self");
        } else if (tabName === "atm") {
            window.open("https://tr-sys.com/solution/automated-teller-machines/", "_self");
        } else if (tabName === "openway") {
            window.open("https://www.openwaygroup.com/", "_self");
        } else if (tabName === "unipos") {
            window.open("http://www.bulmag.bg/wp-content/static/UniPOS_Pro_booklet.pdf", "_self");
        } else if (tabName === "auriga") {
            window.open("https://www.aurigaspa.com/", "_self");
        }

    } else {
        let i, x;
        x = document.getElementsByClassName("containerTab");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }
}


