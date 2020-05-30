import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from "react-native";
import {connect} from "react-redux"
import { purple,white,lightPurp } from "../utils/color";
class Deck extends Component {
  render() {
      const {deck} =  this.props
     return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <View key={deck.title} style={styles.deckContainer}>
       <View>
         <Text style={styles.deckText}>{deck.title}</Text>
       </View>
       <View>
         <Text style={styles.cardText}>
           {deck.questions.length} cards
         </Text>
       </View>
     </View>
     <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz', {title: deck.title})}
        />
        <Text>{`\n`}</Text>
      <Button title="Add Question" buttonStyle={styles.button} onPress={() => this.props.navigation.navigate('AddQuestion', {title: deck.title})}/>
     </View>
    )
  }
}

const styles = StyleSheet.create({

    button:{
        marginBottom: 16,
        color: purple,
    },
  
    title: {
      fontSize: 40,
      textAlign: "center",
      marginBottom: 16,
      color: purple,
    },
    deckContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexBasis: 120,
      minHeight: 120,
      borderWidth: 1,
      borderColor: "#aaa",
      backgroundColor: white,
      borderRadius: 5,
      width:400,
      marginBottom: 10,
    },
    deckText: {
      fontSize: 28,
    },
    cardText: {
      fontSize: 18,
      color: lightPurp,
    },
  })

function mapStateToProps(decks,{navigation,route}){
    const title = route.params.title;
    const deck = decks[title];
    return {
        deck
    }
}

export default connect(mapStateToProps)(Deck)