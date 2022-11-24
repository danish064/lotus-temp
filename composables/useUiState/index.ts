import { StateInterface, UseUiStateInterface } from '~/composables/useUiState/useUiState';

const initialState = {
  isCartSidebarOpen: false,
  isDashboardMobileMenuOpen: false
}

const state = reactive<StateInterface>(initialState);

/**
 * Global store for managing UI state.
 *
 * See the {@link UseUiStateInterface} for a list of methods and values available in this composable.
 */
export function useUiState(): UseUiStateInterface {


  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const toggleDashboardMobileMenu = () => {
    state.isDashboardMobileMenuOpen = !state.isDashboardMobileMenuOpen
  }



  return {
    isCartSidebarOpen: computed(() => state.isCartSidebarOpen),
    isDashboardMobileMenuOpen: computed(() => state.isDashboardMobileMenuOpen),
    toggleCartSidebar,
    toggleDashboardMobileMenu,
  };
}

export default useUiState;
export * from './useUiState';
