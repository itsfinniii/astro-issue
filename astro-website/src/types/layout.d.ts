interface FooterColumnItem {
    url: string;
    text: string;
}

interface FooterColumn {
    title: string;
    links: FooterColumnItem[];
}

interface FooterSocial {
    url: string;
    text: string;
    icon: string;
    color?: string;
}

interface Footer {
    columns: FooterColumn[];
    socials?: FooterSocial[];
}

interface NavigationColumnItem {
    url: string;
    text: string;
}

interface NavigationColumn {
    title: string;
    links: NavigationColumnItem[];
}

interface Navigation {
    columns: NavigationColumn[];
}