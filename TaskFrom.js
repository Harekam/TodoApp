/**
 * Created by harekamsingh on 4/4/16.
 */
'use strict';
import React, {Component, Text, StyleSheet, View, TextInput, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F7F7F7'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        backgroundColor: '#666'
    }
});

class TaskFrom extends Component {
    constructor(props, context) {
        super(props, context);

    }

    onChange(text) {
        this.task = text;
    }

    onAddPressed() {
        this.props.onAdd(this.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.onChange.bind(this)}
                    style={styles.input}/>
                <TouchableHighlight
                    onPress={this.onAddPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Add
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.props.onCancel}
                    style={[styles.button,styles.cancelButton]}>
                    <Text style={styles.buttonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
TaskFrom.propTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired
};
export default TaskFrom;