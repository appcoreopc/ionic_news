import { Transfer } from 'ionic-native';
//f7ea0d204d5b49a8b51608c1cdf6affd

export class FileTransferService {
    constructor() {

    }

    download(target: string) {

    }

    upload(source: string) {
        var options: any;
        options = {
            url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': 'f7ea0d204d5b49a8b51608c1cdf6affd'
            }
        }

        let fileTransfer = new Transfer();
        fileTransfer.download("http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg", "https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories&language=en", options).then(data => {
            // success    
            console.log(data);

        }).catch(ex => {
            console.log(ex);
        });
    }
}