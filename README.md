# Movie Hub
A React Native application that allows users to explore movies, actors, add/remove movies/actor to favorites.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ceacaiosifclaudiu/movie-hub-react-native

2. Install dependencies:
   ```bash
    cd movie-hub-react-native
    npm install
 
3. Install Android Studio and Dependencies:
 To set up the Android development environment, follow these steps:

    * Install Android Studio on your computer. During installation, ensure that you select the following components:
      - Android SDK
      - Android SDK Platform
      - Android Virtual Device
      - If not using Hyper-V: Performance (Intel ® HAXM) (For AMD or Hyper-V, refer to these instructions).

    * Open Android Studio, click on `"More Actions,"` and select `"SDK Manager."` Within the `"SDK Platforms"` tab, ensure that `"Android SDK Platform 33"` is checked.

    * In the `"SDK Tools"` tab, ensure that `"Android SDK Build-Tools 33.0.0"` is selected.

    * Configure the `ANDROID_HOME` environment variable to point to your Android SDK location `(usually %LOCALAPPDATA%\Android\Sdk)`.

    * Add the platform-tools directory `(usually %LOCALAPPDATA%\Android\Sdk\platform-tools)` to your system's PATH environment variable.

     Alternatively, you can follow the [React Native Android setup guide](https://reactnative.dev/docs/environment-setup?guide=native) for detailed instructions.

  
4. Run the app on iOS or Android:
     ```bash
     npm run ios
     npm run android

5. Docker Container
   A Docker container for this application is available on Docker Hub. You can pull and run it using the following command:
     ```bash
     docker run -d --name my-container ceacaclaudiu/moviefinder:latest

## Technologies Used
- React Native
- Redux Toolkit
- React Navigation
- Axios
- Docker
- GitHub Actions

## Functionality
- Search Movies 
- Check Movie Detail
- See actor and actor related movies
- Add to favorite Actor/Movie

## Folder Structure:
     ```bash
          /
          ├── android                     
          ├── ios                         
          ├── src/
          │   ├── apis                   
          │   ├── assets                   
          │   ├── commonStyle            
          │   ├── components             
          │   ├── navigation/
          │   │   └── AppNavigation.tsx
          │   │   └── CustomDrawer.tsx
          │   └── screens/
          │       └── FavoriteScreen.tsx
          │       └── HomeScreen.tsx
          │       └── MovieScreen.tsx
          │       └── PersonScreen.tsx
          │       └── SearchScreen.tsx
          │   ├── store            
          │   └── types
          ├── App.tsx
          ├── jest.config.js             
          ├── Dockerfile
          ├── package.json                  
          └── ...
          
    
## Screenshots/GIFs
### Home Screen
<img src="https://github.com/ceacaiosifclaudiu/movie-hub-react-native/assets/110819428/f43ee3e1-047d-4d73-912c-65fd49f73537" alt="BasicShop" width="310"/> 

### Search Screen
<img src="https://github.com/ceacaiosifclaudiu/movie-hub-react-native/assets/110819428/cd61b89e-fd15-4768-8e94-fbc8e47c35ff" alt="BasicShop" width="310"/>

### Movie Screen
<img src="https://github.com/ceacaiosifclaudiu/movie-hub-react-native/assets/110819428/58f9492f-b29b-4c6a-9604-b9ba923acc69" alt="BasicShop" width="310"/>

### Person Screen
<img src="https://github.com/ceacaiosifclaudiu/movie-hub-react-native/assets/110819428/3dd16188-e034-4a33-95a7-ccce032ac441" alt="BasicShop" width="310"/>

### Favorite Screen
<img src="https://github.com/ceacaiosifclaudiu/movie-hub-react-native/assets/110819428/223c6097-d9dc-4ca0-8074-01fb48f0bab4" alt="BasicShop" width="310"/>

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.
