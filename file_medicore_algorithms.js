/**
 * MEDICORE SYSTEM
 * Search - Filter - Aggregate
 */

let patientData = [
  {
    id: "P001",
    name: "Nguyen Van A",
    status: "stable",
    age: 45,
    heartRate: 80,
  },
  {
    id: "P002",
    name: "Nguyen Van B",
    status: "critical",
    age: 60,
    heartRate: 130,
  },
  {
    id: "P003",
    name: "Nguyen Van C",
    status: "stable",
    age: 30,
    heartRate: 85,
  },
  {
    id: "P004",
    name: "Nguyen Van D",
    status: "critical",
    age: 72,
    heartRate: 45,
  },
];

// ===================================
// YÊU CẦU 1: SEARCH
// ===================================

function find_patient_by_id(data, target_id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === target_id) {
      return data[i];
    }
  }

  return null;
}

// ===================================
// YÊU CẦU 2: FILTER
// ===================================

function filter_critical_patients(data) {
  let result_list = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "critical") {
      result_list.push(data[i]);
    }
  }

  return result_list;
}

// ===================================
// YÊU CẦU 3: AGGREGATE
// ===================================

function calculate_hospital_status(data) {
  let critical_count = 0;
  let total_heart_rate = 0;
  let valid_heart_rate_count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "critical") {
      critical_count++;
    }

    if (data[i].heartRate !== null && data[i].heartRate !== undefined) {
      total_heart_rate += data[i].heartRate;
      valid_heart_rate_count++;
    }
  }

  let critical_percentage = 0;
  let average_heart_rate = 0;

  if (data.length > 0) {
    critical_percentage = (critical_count / data.length) * 100;
  }

  if (valid_heart_rate_count > 0) {
    average_heart_rate = total_heart_rate / valid_heart_rate_count;
  }

  return {
    totalPatient: data.length,
    criticalPatient: critical_count,
    criticalPercentage: critical_percentage.toFixed(2) + "%",
    averageHeartRate: average_heart_rate.toFixed(2),
  };
}

// ===================================
// TEST DỮ LIỆU BAN ĐẦU
// ===================================

console.log("===== SEARCH =====");
console.log(find_patient_by_id(patientData, "P002"));

console.log("===== FILTER =====");
console.log(filter_critical_patients(patientData));

console.log("===== STATISTICS =====");
console.log(calculate_hospital_status(patientData));

// ===================================
// CHỨNG MINH TÍNH ĐỘNG
// ===================================

patientData.push({
  id: "P005",
  name: "Hoang Van E",
  status: "critical",
  age: 50,
  heartRate: 140,
});

patientData.push({
  id: "P006",
  name: "Nguyen Thi F",
  status: "stable",
  age: 28,
  heartRate: 78,
});

console.log("===== AFTER ADDING NEW PATIENTS =====");

console.log(find_patient_by_id(patientData, "P005"));

console.log(filter_critical_patients(patientData));

console.log(calculate_hospital_status(patientData));
