import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

interface AppState {
    running: boolean;
    startTime: Date | null;
    laps: any[]; // Replace 'any[]' with the appropriate type for laps
    timeElapsed: Date | null; // Replace 'any[]' with the appropriate type for laps3`
    reset : boolean;
}


export default class App extends Component {
    state: AppState = {
        running: false,
        startTime: null,
        laps: [],
        timeElapsed: null,
        reset : false,
    };

    interval: NodeJS.Timeout | undefined;
    constructor(props: {}) {
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: null,
            laps: [],
            reset : false,
        };
        this.handleStartPress = this.handleStartPress.bind(this);
        this.startStopButton = this.startStopButton.bind(this);
        this.handleLapPress = this.handleLapPress.bind(this);
        this.handleResetPress = this.handleResetPress.bind(this);
    }

    handleStartPress() {
        this.setState({ running: !this.state.running , reset : false});
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({
                running: false,
            });
            return;
        }
        console.log('started');
        this.setState({
            startTime: new Date(),
        });

        this.interval = setInterval(() => {
            if (this.state.startTime) {
                this.setState({
                    timeElapsed: new Date().getTime() - this.state.startTime.getTime(),
                    return: true,
                });
            }
        }, 30);
    }

    handleLapPress() {
        var lap = this.state.timeElapsed;

        this.setState({
            laps: this.state.laps.concat([lap]),
        });
    }

    handleResetPress() {
        this.setState({
            running: false,
            startTime: null,
            timeElapsed: null,
            laps: [],
            reset :!this.state.reset,
        });
    }
    startStopButton() {
        var style = this.state.running ? styles.stopButton : styles.startButton;

        return <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress} style={[style, styles.button]}>
            <Text>
                {this.state.running ? 'Stop' : 'Start'}
            </Text>
        </TouchableHighlight>;
    }

    lapButton() {
        return <TouchableHighlight style={styles.button}
            underlayColor="gray" onPress={this.handleLapPress}>
            <Text>
                Lap
            </Text>
        </TouchableHighlight>;
    }


    refreshButton() {
        return <TouchableHighlight style={styles.refeshButton} underlayColor="red" onPress={this.handleResetPress} >
            <Text>
                Refresh
            </Text>
        </TouchableHighlight>;
    }
    laps() {
        // eslint-disable-next-line eqeqeq
        if (this.state.reset == false){
            return this.state.laps.map(function (time, index) {
                return <View key={index} style={styles.lap}>
                    <Text style={styles.lapText}>
                        Lap # {index + 1}
                    </Text>
                    <Text style={styles.lapText}>
                        {time ? formatTime(time) : '00:00:00'}
                    </Text>
                </View>;
            });
        }
        else {
            return <Text style={styles.lapText}>  </Text>;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <View style={styles.timeWrapper}>
                            <Text style={styles.timer}>
                                {this.state.timeElapsed ? formatTime(this.state.timeElapsed) : '00:00:00'}
                            </Text>
                        </View>

                        <View style={styles.buttonWrapper}>
                            {this.lapButton()}
                            {this.startStopButton()}
                        </View>

                        <View style={styles.buttonWrapper}>
                            {this.refreshButton()}
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    {this.laps()}
                </View>
            </View>
        );
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 1,
    },
    timeWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        marginTop: 10,
    },

    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        fontSize: 60,
    },
    lapText: {
        fontSize: 30,
    },

    stopButton: {
        borderColor: 'red',
    },
    startButton: {
        borderColor: 'green',
    },
    refeshButton: {
        borderWidth: 2,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    refeshButtonDisabled: {
        color: 'white',
    },


});



