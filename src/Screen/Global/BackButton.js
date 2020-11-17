import { BackHandler } from 'react-native'

export const BackButtonEnable = ({

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    },
    handleBackButton() {
        // ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return false;
    },
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
})
export const BackButtonDisable = ({

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    },
    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    },
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
})