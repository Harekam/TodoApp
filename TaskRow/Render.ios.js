/**
 * Created by harekamsingh on 4/6/16.
 */
'use strict';
import React, {Text, StyleSheet, View} from 'react-native';
import Swipeout from 'react-native-swipeout';
export default function render(baseStyle) {
    const buttons = [
        {
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPress: this.onDonePressed.bind(this)
        }
    ];
    console.log("filter todo", this.props.todo);
    if (this.props.todo.state === 'pending') {
        return (
            <View style={localStyle.container}>
                <Swipeout
                    autoClose={true}
                    right={buttons}
                    backgroundColor="#fff"
                >
                    <View style={[baseStyle.container,localStyle.row]}>
                        <Text style={baseStyle.label}>{this.props.todo.task}</Text>
                    </View>
                </Swipeout>
            </View>
        );
    }
    return (
        <View style={localStyle.container}>
            <View style={[baseStyle.container,localStyle.row]}>
                <Text style={baseStyle.label}>{this.props.todo.task}</Text>
            </View>
        </View>
    );

}

const localStyle = StyleSheet.create({
    row: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0
    },
    container: {
        marginBottom: 20
    }
});

