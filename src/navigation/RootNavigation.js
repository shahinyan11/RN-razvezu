import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function navigateAndRemove(screen, params) {
  if (navigationRef.isReady()) {
    const {index, routes} = navigationRef.getState();

    routes[index] = {
      name: screen,
      params,
    };

    navigationRef.reset({
      index,
      routes,
    });
  }
}

export function getCurrentScreenOptions() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentOptions();
  }
}
