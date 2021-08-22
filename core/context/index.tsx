import React, { useContext } from 'react';
import LayoutStore, { LayoutStoreType } from './LayoutStore';

const AppContext = React.createContext(null);

interface Props {
	children: React.ReactNode;
}

const AppProvider = ({ children }: Props): JSX.Element => {
	const Store = {
		layout: LayoutStore(),
	};

	return <AppContext.Provider value={Store}>{children}</AppContext.Provider>;
};

export default AppProvider;

const useStore = () => useContext(AppContext);
export const useLayout = (): LayoutStoreType => useStore().layout;
