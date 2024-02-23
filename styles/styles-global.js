import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgb(130, 149, 174)',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  inputText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
  },
});

export default styles;
