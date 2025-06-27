
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'teacher' | 'student' | 'parent';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  teacherName: string;
  subject: string;
  maxStudents: number;
  currentStudents: number;
  price: number;
  schedule: {
    day: string;
    time: string;
  }[];
  status: 'open' | 'full' | 'closed';
  startDate: string;
  endDate: string;
}

export interface Enrollment {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  status: 'pending' | 'enrolled' | 'payment_pending';
  enrolledAt: string;
  paymentStatus: 'unpaid' | 'paid' | 'overdue';
  amount: number;
}

export interface Payment {
  id: string;
  enrollmentId: string;
  studentId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  dueDate: string;
  paidAt?: string;
}
