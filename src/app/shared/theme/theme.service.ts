import { Injectable } from '@angular/core';
import { StylesheetService } from '../stylesheet/stylesheet';
import { Theme } from './theme.model';

@Injectable(

)
export class ThemeService {
    private themePathPrefix = '';
    constructor(private styleManager: StylesheetService) {
    }

    themes = [
        {
            name: 'deeppurple-amber',
            primary: '#673AB7',
            accent: '#FFC107',
            href: 'deeppurple-amber.css',
            isDark: false,
        },
        {
            name: 'indigo-pink',
            primary: '#3F51B5',
            accent: '#E91E63',
            href: 'indigo-pink.css',
            isDark: false,
            isDefault: true,
        },
        {
            name: 'pink-bluegrey',
            primary: '#E91E63',
            accent: '#607D8B',
            href: 'pink-bluegrey.css',
            isDark: true,
        },
        {
            name: 'purple-green',
            primary: '#9C27B0',
            accent: '#4CAF50',
            href: 'purple-green.css',
            isDark: true,
        },
    ];

    getThemeOrDefault(name: string) {
        let theme = this.themes.find(t => t.name === name);
        if (!theme) {
            theme = this.themes.find((t: Theme) => t.isDefault === true);
        }
        return theme;
    }

    installTheme(theme: Theme) {
        if (theme.isDefault) {
            this.styleManager.removeStyle('theme');
        } else {
            this.styleManager.setStyle('theme', `assets/styles/${theme.href}`);
        }
    }

}
