import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/participant";

export default function Home() {
  const participant = ['Keveny','Rodrigo','Marcos', 'Leandro', ]

  function handleParticipantAdd() {
    console.log("Usuario adicionado");
  }
  function handleParticipantRemove(name : string){
  console.log( `voce removeu o participante: ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>BEM VINDO AO INICIO</Text>
      <Text style={styles.eventDate}>Data: 16/12/2022</Text>
      <View style ={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu nome aqui"
          placeholderTextColor="#6b6c6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
     
     {
      participant.map(participant =>(
        <Participant 
        key= {participant}
        name ='Marcos' 
        onRemove={()=>handleParticipantRemove("Marcos")}/>
      ))
     }
    </View>
  );
}
