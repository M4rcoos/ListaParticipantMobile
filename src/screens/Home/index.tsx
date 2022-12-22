import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export  function Home() {
 const [participants, setParticipant] =useState<string[]> ([])
 const [participantName, setParticipantName] = useState('')

 
 const hoje = new Date()
 const dia = hoje.getDate().toString().padStart(2,'0')
 const mes = String(hoje.getMonth() + 1).padStart(2,'0')
 const ano = hoje.getFullYear()
 const dataAtual = `${dia} / ${mes} / ${ano}`

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
     return( Alert.alert("Participante já exite","Já exite um participante na lista com esse nome.")
   )}
      setParticipant(prevState=>[...prevState, participantName]);
      setParticipantName('')
  }
  function handleParticipantRemove(name : string){
    Alert.alert("Remover", `Deseja remover o participante ${name} da sua lista?`, [
      {
        text:'Sim', 
        onPress:()=> setParticipant(prevState=> prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Crie sua lista de participantes</Text>
      <Text style={styles.eventDate}>
  {dataAtual }
      </Text>
      <View style ={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu nome aqui"
          placeholderTextColor="#6b6c6b"
          onChangeText={e => setParticipantName(e)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
     data={participants}
     keyExtractor={item => item}
     renderItem={({item})=>(
      <Participant 
      key= {item}
      name ={item}
      onRemove={()=>handleParticipantRemove(item)}
     />
     )}
     showsVerticalScrollIndicator={false}

     ListEmptyComponent ={()=>(
      <Text style={styles.listEmptyText}>
        Ainda não tem participantes? Adicione um na sua lista de presença
      </Text>
     )}
     />
    
    </View>
  );
}
