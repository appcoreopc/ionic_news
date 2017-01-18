import { Deploy } from '@ionic/cloud-angular';

export class ApplicationUpdateService {
    constructor(private deploy: Deploy) {

    }

    appUpdate() {
        this.deploy.check().then(updateAvailable => {
            if (updateAvailable) {
                this.deploy.download().then(() => {
                    console.log('downloading package/snapshot')
                    this.deploy.extract().then(() => {
                        console.log('reloading package/snapshot')
                        this.deploy.load();
                    })
                }
                )
            };
        });
    }
}