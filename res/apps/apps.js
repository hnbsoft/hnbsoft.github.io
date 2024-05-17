//
// Exported functions
//
/*
 * getAllAppInfoList()
 * Returns: All the app info objects as a list.
 */
/* exported getAllAppInfoList */

/*
 * generateAllAppsHtmlString()
 * Returns: All the apps html string.
 */
/* exported generateAllAppsHtmlString */


// OK - Define class AppInfo
function AppInfo()
{
    "use strict";

    // Properties
    this.name      = "";    // App name
    this.appid     = "";    // App id (can be mac-app-id or windows-app-id)
    this.icon      = "";    // App icon name(without extension. e.g: "fire", and you must provide "fire.png" file)
    this.repoName  = "";    // The repo name, then the source code and license url will be prefixed with github.com/hnbsoft
    this.intro     = "";    // App introduction
    this.desc      = "";    // **NOT USED**: App detailed description
    this.lines     = 0;     // If app introduction is too short, this means how many extra empty lines should be added.
    this.isWinApp  = false; // Is this app a windows app or not, true means windows app, otherwise mac app
 
    // Instance Methods
    this.getAppName = function() {
        return this.name;
    };

    this.getAppId = function() {
        return this.appid;
    };

    this.getAppIconName = function() {
        return this.icon + ".png";
    };

    this.getRepoName = function() {
        return this.repoName;
    };

    this.getCodeUrl = function() {
        return "https://github.com/hnbsoft/" + this.repoName;
    };

    this.getStoreUrl = function() {
        if (this.isWinApp) {
            return "https://www.microsoft.com/store/apps/" + this.appid;
        }
        else {
            return "https://apps.apple.com/app/id" + this.appid;
        }
    };

    this.getIntro = function() {
        return this.intro;
    };

    this.getDescription = function() {
        return this.desc;
    };

    this.getExtraLines = function() {
        return this.lines;
    };

    this.getStoreName = function() {
        return this.isWinApp ? "Microsoft Store" : "Mac App Store";
    };
}

// OK - Get all the AppInfo objects as a list.
function getAllAppInfoList()
{
    "use strict";

    // initialize a list to hold all the app info objects.
    var allAppsList = [];

    // Initialize AppInfo object.
    // Initialization template.
    /*

        var oneApp = new AppInfo();
        oneApp.name      = "";           // App name
        oneApp.appid     = "";           // Your app or product id
        oneApp.icon      = "";           // App icon name(without extension)
        oneApp.repoName  = "";           // The repo name for source code and license url address.
        oneApp.intro     = "";           // App introduction
        oneApp.desc      = "NOT USED";   // **NOT USED**: App detailed description
        oneApp.lines     = 0;            // 0, 1, 2. Extra lines.

    */

    // App 1. Glance app (Mac).
    var glanceApp = new AppInfo();
    glanceApp.name      = "Glance";                          // App name ("Glance - Quick Look Code Files")
    glanceApp.appid     = "1564688210";                      // Your app or product id
    glanceApp.icon      = "gl";                              // App icon name(without extension)
    glanceApp.repoName  = "glance";                          // The source code and license url address.
    glanceApp.intro     = "Quickly preview various files";   // App introduction
    glanceApp.desc      = "NOT USED";                        // **NOT USED**: App detailed description
    glanceApp.lines     = 0;

    // App 2. Go office 2021 (Mac)
    var goOfficeApp = new AppInfo();
    goOfficeApp.name      = "GO Office";                   // App name
    goOfficeApp.appid     = "645727036";                   // Your app or product id
    goOfficeApp.icon      = "gof";                         // App icon name(without extension)
    goOfficeApp.repoName  = "officecore";                  // The repo name for source code and license url address.
    goOfficeApp.intro     = "Full-featured office suite";  // App introduction
    goOfficeApp.desc      = "NOT USED";                    // **NOT USED**: App detailed description
    goOfficeApp.lines     = 0;                             // 0, 1, 2. Extra lines.

    // App 3. RAR Expert (Mac)
    var rarApp = new AppInfo();
    rarApp.name      = "RAR Extractor Expert";            // App name
    rarApp.appid     = "647686027";                       // Your app or product id
    rarApp.icon      = "rar";                             // App icon name(without extension)
    rarApp.repoName  = "Unarchiver";                      // The repo name for source code and license url address.
    rarApp.intro     = "Extract any RAR, ZIP, 7Z, etc";   // App introduction
    rarApp.desc      = "NOT USED";                        // **NOT USED**: App detailed description
    rarApp.lines     = 0;                                 // 0, 1, 2. Extra lines.

    // App 4. Paint Expert (Mac)
    var paintExpertApp = new AppInfo();
    paintExpertApp.name      = "Paint Expert";                // App name
    paintExpertApp.appid     = "645732449";                   // Your app or product id
    paintExpertApp.icon      = "ptx";                         // App icon name(without extension)
    paintExpertApp.repoName  = "PaintExpert";                 // The repo name for source code and license url address.
    paintExpertApp.intro     = "Full-featured image editor";  // App introduction
    paintExpertApp.desc      = "NOT USED";                    // **NOT USED**: App detailed description
    paintExpertApp.lines     = 0;                             // 0, 1, 2. Extra lines.

    // App 5. App Icon Producer (Mac)
    var iconApp       = new AppInfo();
    iconApp.name      = "App Icon Producer";                // App name
    iconApp.appid     = "6451134736";                       // Your app or product id
    iconApp.icon      = "iconapp";                          // App icon name(without extension)
    iconApp.repoName  = "AppIconGenerator";                 // The repo name for source code and license url address.
    iconApp.intro     = "Make .icns icon file easily";      // App introduction
    iconApp.desc      = "NOT USED";                         // **NOT USED**: App detailed description
    iconApp.lines     = 0;                                  // 0, 1, 2. Extra lines.

    // App 6: Packs for MS Office Templates (Mac)
    var pack4MSOApp = new AppInfo();
    pack4MSOApp.name      = "Packs for MS Office Templates";            // App name
    pack4MSOApp.appid     = "6502692083";                               // Your app or product id
    pack4MSOApp.icon      = "pack4mso";                                 // App icon name(without extension)
    pack4MSOApp.repoName  = "";                                         // The repo name for source code and license url address.
    pack4MSOApp.intro     = "A great number of different templates";    // App introduction
    pack4MSOApp.desc      = "NOT USED";   // **NOT USED**: App detailed description
    pack4MSOApp.lines     = 0;            // 0, 1, 2. Extra lines.


    // Add to list
    allAppsList.push(glanceApp);        // glance app
    allAppsList.push(goOfficeApp);      // go office app
    allAppsList.push(rarApp);           // rar extractor expert app
    allAppsList.push(paintExpertApp);   // paint expert app
    allAppsList.push(iconApp);          // App Icon app
    allAppsList.push(pack4MSOApp);      // Packs for MS Office Templates app

    // return this list
    return allAppsList;
}

// OK - Generate all apps html codes as a string.
function generateAllAppsHtmlString()
{
    "use strict";

    var htmlString = '';

    // Get all the apps
    var allAppsList = getAllAppInfoList();
    var allAppsCount = allAppsList.length;
    for (var aIndex = 0; aIndex < allAppsCount; aIndex++)
    {
        // Fetch each app info here
        var appInfo = allAppsList[aIndex];
        var appName = appInfo.getAppName();
        var appIcon = appInfo.getAppIconName();
        var appRepoName = appInfo.getRepoName();
        var appUrl = appInfo.getStoreUrl();
        var appIntro = appInfo.getIntro();
        var appLines = appInfo.getExtraLines();
        var appSourceCodeUrl = appInfo.getCodeUrl();
        var appStoreName = appInfo.getStoreName();

        // Compose app icon style
        var appIconStyle = 'background-image: url(res/apps/' + appIcon + ');';

        // Check to see if we need to add extra lines
        var extraLineHtmlString = '';
        for (var tmpLine = 0; tmpLine < appLines; tmpLine++) {
            extraLineHtmlString += '<p>&nbsp;</p>';
        }

        // Compose html string
        htmlString += '<div class="col-10 col-md-8 col-lg-6 col-xl-5">';
        htmlString += '    <div class="card service-card mb-50 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">';
        htmlString += '        <div class="card-body">';
        htmlString += '            <a href="' + appUrl + '" class="wuy-app-icon" target="_blank" style="' + appIconStyle + '"></a>';
        htmlString += '            <h4>' + appName + '</h4>';
        htmlString += '            <p>' + appIntro + '</p>';
        htmlString += '            <div style="margin: 30px auto;"></div>';
        htmlString += '            <a href="' + appUrl + '" target="_blank"><button style="width: 75%;" type="button" class="btn btn-primary">View on the ' + appStoreName + '</button></a>';
        htmlString += '            <div style="margin: 10px auto;"></div>';
        htmlString += appRepoName ? '            <a href="' + appSourceCodeUrl + '" target="_blank"><button style="width: 75%;" type="button" class="btn btn-success">Source Code &amp; License</button></a>' : '';
        htmlString += extraLineHtmlString;
        htmlString += '        </div>';
        htmlString += '    </div>';
        htmlString += '</div>';
    }

    // Returns
    return htmlString;
}