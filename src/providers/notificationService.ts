import { Push, PushToken, Deploy } from '@ionic/cloud-angular';
import { Platform } from 'ionic-angular';

export class NotificationService {
    constructor(private platform: Platform, private push: Push) {
    }

    registerPushNotification() {
        this.platform.ready().then(source => {
            console.log("platform ready: " + source);
            this.push.register().then((t: PushToken) => {
                return this.push.saveToken(t);
            }).then((t: PushToken) => {
                console.log('Token saved:', t.token);
            });

            this.push.rx.notification()
                .subscribe((msg) => {
                    alert(msg.title + ': ' + msg.text);
                });
        });

    }
}