


#Phonegap Cmd line

The phonegap is an lib that convert the web app(html,css,javascript) into native application the 


1. For Android "Android SDK Tools Only" [link](http://developer.android.com/sdk/index.html)
2. For IOS "Mac with Xcode" and "CLI for Xcode"
2. Setting up the environment variable 
	1. **For Mac**
		1. Create file .bash_profile
		2. Place the environment ulr in the files

	            export PATH=${PATH}:"Place the android-sdk-mac folder url"/tools
	            export PATH=${PATH}:"Place the android-sdk-mac folder url"/platform-tools

		3. Once file created you must run it by 
         	          
	            source ~/.base_profile
		4. To test run cmd `android` in Terminal the sdk-manager will open and select the select the APIs to install it
		5. The android sdk is req the **Java** if you are not install. Download the java from [link](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and install it. To ensure the java is install run cmd `java` it res bunch of cmds
		6. The phonegap cli also require the apache ant download from [link](http://ant.apache.org/bindownload.cgi) once installation completed.  Double check the ant is running by cmd `ant` it res some build failed 
	2. **For Windows** 
		1. Goto Control Panel>System and Security and click the  edit environmental variable, A system properties dialog  should open 
		2. Click the environmental var button, the environmental variable dialog open. Select the path in system variable and click the edit button 
		3.  Edit system variables dialog open and add the path of android sdk, apache ant, phonegap 
    **eg:**
    
                C:\android\sdk\platform-tools;
                C:\android\apache-ant-1.9.2\bin;
                C:\android\phonegap-2.9.0\lib\android\bin
3. Phonegap:

		1. Install the phonegap by use following cmd  
		`npm install -g phonegap` in unix/linux use `sudo`. To test this simple type `phonegap -v`	

		2. Creating phonegap project via CLI for eg.
		`phonegap create demo com.mugilsoft.demo Demo`		

		3. To build phonegap, Move to phonegap app folder and run the cmd
		`phonegap build android` here `android` is a platform name. If you want to create `iso`  use `phonegap build ios`		

		4. To Run the build app on *emulator* or *mobile phone* use `phonegap install android` for android or you can manually install the apk file the located in *`phonegap_app_folder/platforms/android/ant-build`*  as `appName-debug.apk` if its an iso make sure you must install ios-deploy and ios-sim if not use cmd `npm install -g ios-deploy` / `npm install -g ios-sim` and run `phonegap install ios`
		
		5. To use the phonegap plugin use `phonegap plugin add plugin_name` to check the plugin install use `phonegap plugin list` for remove use `phonegap plugin remove plugin_name` 
**Note:** Here `plugin_name` is plugin identifier or plugin url

		6. If you want to test your application via phonegap developer app use `phonegap serve` it will return an ip address use the ip on phonegap developer app to test.
	
	
4. Cordova:

		1. Install the cordova by use following cmd  
		`npm install -g cordova` in unix/linux use `sudo`. To test this simple type `cordova -v`

		2. Creating cordova project via CLI for eg.
		`cordova create demo com.mugilsoft.demo Demo`

		3. To build cordova, Move to cordova app folder and add the platform by use `cordova platform add android`  for android and  `cordova build`
		
		4. To run the build app use `cordova run android` for android app
		
	 	5. To use the phonegap plugin use `cordova plugin add plugin_name`
		
