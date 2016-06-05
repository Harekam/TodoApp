/**
 * Created by harekamsingh on 4/6/16.
 */
'use strict';
import React, {Text, StyleSheet, View, TouchableHighlight, Image, Animated} from 'react-native';

export default function render(styles) {
    const doneAnimation = new Animated.ValueXY();
    const localStyle = StyleSheet.create({
        doneButton: {
            borderRadius: 5,
            padding: 5
        },
        row: {
            transform: doneAnimation.getTranslateTransform()
        }
    });

    function animatedPress() {
        Animated.spring(doneAnimation, {
            tension: 2,
            friction: 3,
            toValue: {
                x: -500,
                y: 0
            }
        }).start();
        setTimeout(()=> {
            this.onDonePressed();
        }, 1000);
    }

    if (this.props.todo.state === 'pending') {
        return (
            <Animated.View style={[styles.container,localStyle.row]}>
                <Text style={styles.label}>{this.props.todo.task}</Text>
                <TouchableHighlight
                    underlayColor="#ddd"
                    onPress={animatedPress.bind(this)}
                    style={localStyle.doneButton}

                >
                    <Image source={require('../images/done.png')}/>
                </TouchableHighlight>
            </Animated.View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{this.props.todo.task}</Text>
        </View>
    );
}

