import { Component } from '@angular/core';
import { mobiscroll, MbscPopupOptions, MbscListviewOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {
options = [{
        text: 'Wifi',
        icon: 'connection'
    }, {
        text: 'Location',
        icon: 'location'
    }, {
        text: 'Sound',
        icon: 'volume-medium'
    }, {
        text: 'Rotation',
        icon: 'fa-rotate-left'
    }, {
        text: 'Bluetooth',
        icon: 'ion-bluetooth'
    }, {
        text: 'Settings',
        icon: 'cogs'
    }, {
        text: 'Reading',
        icon: 'user4'
    }, {
        text: 'Data',
        icon: 'download'
    }, {
        text: 'Eye comfort',
        icon: 'eye'
    }, {
        text: 'Screenshot',
        icon: 'mobile'
    }, {
        text: 'Airplane Mode',
        icon: 'airplane'
    }, {
        text: 'Alarm',
        icon: 'alarm2'
    }, {
        text: 'Messages',
        icon: 'material-message'
    }, {
        text: 'Weather',
        icon: 'meteo-weather4'
    }, {
        text: 'Camera',
        icon: 'camera'
    }, {
        text: 'Edit',
        icon: 'material-photo-size-select-large'
    }];

    checked: string;
    update: string;

    settings: MbscPopupOptions = {
        display: 'center'
    };

    listSettings: MbscPopupOptions = {
        display: 'center',
        onSet: (event, inst) => {
            this.checked = this.update;
        }
    };

    scrollableSettings: MbscPopupOptions = {
        display: 'center',
        scrollLock: false,
        cssClass: 'mbsc-no-padding md-content-scroll',
        buttons: []
    };

    lvSettings: MbscListviewOptions = {
        enhance: true,
        swipe: false,
        onItemTap: (event, inst) => {
            mobiscroll.toast({
                message: event.target.innerText + ' clicked'
            });
        }
    };
}
