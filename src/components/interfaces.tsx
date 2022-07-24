export interface ILayoutProps {
  headerMinimize: boolean;
  children: React.ReactNode;
}

export interface IHeaderProps {
  headerMinimize: boolean;
}

export interface IIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface IIconSunProps {
  onClick?: () => void;
  className?: string;
}

export interface IIconMoonProps {
  onClick?: () => void;
  className?: string;
}

export interface IIconCheckProps {
  className?: string;
}

export interface IIconArrowDownProps {
  className?: string;
}

export interface IIconArrowUpProps {
  onClick?: () => void;
  className?: string;
}

export interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export interface IResultProps {
  madeUpName: string;
}

export interface ISearchBarProps {
  input: string;
  onChange: (search: string) => void;
  headerMinimize: boolean;
}

export interface IResultsProps {
  madeUpNames: string[];
  search: string;
}

export interface ILoadMoreButtonProps {
  onClick: () => void;
}

export interface IThemeContext {
  lightMode: boolean;
  toggleLightMode: () => void;
}

export interface ILightModeProviderProps {
  children: React.ReactNode;
}
