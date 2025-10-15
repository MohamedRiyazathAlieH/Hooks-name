// app/(admin)/models.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

// Dummy Data for the list
const DUMMY_MODELS = [
  { id: 1, name: 'Financial Analyst Intern', status: 'Active', created: '2025-10-01' },
  { id: 2, name: 'Software Dev Intern (Backend)', status: 'Draft', created: '2025-09-15' },
  { id: 3, name: 'UX/UI Designer Intern', status: 'Archived', created: '2025-08-20' },
];

export default function AdminModelsScreen() {
  const handleEdit = (id: number) => {
    console.log('Edit Model:', id);
    // TODO: Navigate to edit screen
  };

  const handleAddNew = () => {
    console.log('Add New Model');
    // TODO: Navigate to create model screen
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active': return styles.activeStatus;
      case 'Draft': return styles.draftStatus;
      case 'Archived': return styles.archivedStatus;
      default: return styles.archivedStatus;
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Model Management" }} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Model List</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
          <MaterialIcons name="add" size={20} color="white" />
          <Text style={styles.addButtonText}>Add New</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <ScrollView style={styles.listContainer}>
        {DUMMY_MODELS.map((model) => (
          <View key={model.id} style={styles.listItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.modelName}>{model.name}</Text>
              <Text style={styles.modelCreated}>Created: {model.created}</Text>
            </View>

            <View style={[styles.statusBadge, getStatusStyle(model.status)]}>
              <Text style={styles.statusText}>{model.status}</Text>
            </View>

            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(model.id)}>
              <MaterialIcons name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#E5E7EB' },
  headerText: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  addButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3B82F6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  addButtonText: { color: 'white', fontWeight: '600', marginLeft: 4 },

  listContainer: { padding: 16 },
  listItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  modelName: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 2 },
  modelCreated: { fontSize: 12, color: '#6B7280' },

  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999, marginHorizontal: 8 },
  statusText: { fontSize: 12, fontWeight: '500' },
  activeStatus: { backgroundColor: '#D1FAE5', color: '#047857' },
  draftStatus: { backgroundColor: '#FEF3C7', color: '#B45309' },
  archivedStatus: { backgroundColor: '#F3F4F6', color: '#374151' },

  editButton: { padding: 6, backgroundColor: '#F59E0B', borderRadius: 999 },
});
