import { CommonActions, NavigationState } from '@react-navigation/native'

export function resetRoutes (newInitialRoute: string, routeState: NavigationState) : CommonActions.Action {
  const routes = [{ name: newInitialRoute, ...routeState.routes }]

  return CommonActions.reset({
    ...routeState,
    routes,
    index: routes.length - 1
  })
}
