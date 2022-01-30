import React, {useState} from 'react';
import { View, TouchableOpacity,Text} from 'react-native';
import {Agenda} from "react-native-calendars";
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const RezerwacjeScreen= () => {
    const [items, setItems] = useState({});
    const loadItems = (day) => {
        setTimeout(() => {
            const time = '2022-02-01';
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                        items[strTime].push({
                            name: 'Jan Kowalski ,stolik:2, ile:3',
                        });
                    items[strTime].push({
                        name: 'Krzysztof Kononowicz ,stolik:VIP, ile:5',
                    });
                }
            const time1 = '2022-02-02';
            const strTime1 = timeToString(time1);
            if (!items[strTime1]) {
                items[strTime1] = [];
                items[strTime1].push({
                    name: 'Jan Kowalski , stolik: 1, ile: 2',
                });
            }

            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };
    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="A" />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{flex: 1}}>
        <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2022-02-01'}
            renderItem={renderItem}
        />
        </View>
    );

  }

  export default RezerwacjeScreen;