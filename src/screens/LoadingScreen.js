import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';

export default class LoadingScreen extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    componentDidUpdate() {
        if(!this.state.isLoadingComplete) {
            return;
        }

        this.props.navigation.navigate('Home');
    }

    render() {
        if (this.state.isLoadingComplete) {
            return null;
        }
        return (
            <AppLoading
                startAsync={this._loadResourcesAsync}
                onError={this._handleLoadingError}
                onFinish={this._handleFinishLoading}
            />
        );
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('../../assets/images/robot-dev.png'),
                require('../../assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                ...Icon.Ionicons.font,
                'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
                'Roboto': require('native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}
