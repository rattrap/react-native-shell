import { Toast } from 'native-base';

export default function notify(text, type = "default") {
    Toast.show({
        text: text,
        position: 'top',
        type: type
    });
}