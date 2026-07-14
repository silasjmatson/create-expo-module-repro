import { useDemoExpoModuleSharedObject } from 'demo-expo';
import { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  const sharedObject = useDemoExpoModuleSharedObject();
  const [sharedObjectCount, setSharedObjectCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Shared Object">
          <Text>Count: {sharedObjectCount}</Text>
          <Button title="Read count" onPress={() => setSharedObjectCount(sharedObject.count)} />
          <Button
            title="Increment count"
            onPress={() => {
              sharedObject.count += 1;
            }}
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: { fontSize: 30, margin: 20 },
  groupHeader: { fontSize: 20, marginBottom: 20 },
  group: { margin: 20, backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  container: { flex: 1, backgroundColor: '#eee' },
  view: { flex: 1, height: 200 },
};
