
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Book, CreditCard, Clock } from 'lucide-react';

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      id: '1',
      title: 'คณิตศาสตร์ ม.3',
      teacher: 'อาจารย์สมใจ',
      nextClass: '2024-01-15 14:00',
      progress: 65,
      paymentStatus: 'paid'
    },
    {
      id: '2',
      title: 'ภาษาอังกฤษ ม.3',
      teacher: 'อาจารย์สมหญิง',
      nextClass: '2024-01-16 10:00',
      progress: 40,
      paymentStatus: 'pending'
    }
  ];

  const availableCourses = [
    {
      id: '3',
      title: 'วิทยาศาสตร์ ม.3',
      teacher: 'อาจารย์สมชาย',
      price: 2500,
      duration: '8 สัปดาห์',
      schedule: 'จันทร์, พุธ 16:00-18:00'
    },
    {
      id: '4',
      title: 'สังคมศึกษา ม.3',
      teacher: 'อาจารย์สมหมาย',
      price: 2200,
      duration: '6 สัปดาห์',
      schedule: 'อังคาร, พฤหัส 14:00-16:00'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ดนักเรียน</h1>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
          <Book className="w-4 h-4 mr-2" />
          หาคอร์สเรียน
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">คอร์สที่ลงทะเบียน</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">กำลังเรียน</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">คลาสวันนี้</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">เวลา 14:00</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ชั่วโมงเรียน</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">เดือนนี้</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าใช้จ่าย</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₿5,200</div>
            <p className="text-xs text-muted-foreground">เดือนนี้</p>
          </CardContent>
        </Card>
      </div>

      {/* Enrolled Courses */}
      <Card>
        <CardHeader>
          <CardTitle>คอร์สที่กำลังเรียน</CardTitle>
          <CardDescription>ติดตามความก้าวหน้าการเรียน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-600">ครูผู้สอน: {course.teacher}</p>
                  <p className="text-sm text-gray-500">
                    คลาสถัดไป: {new Date(course.nextClass).toLocaleDateString('th-TH')} เวลา {new Date(course.nextClass).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={course.paymentStatus === 'paid' ? 'default' : 'destructive'}
                  >
                    {course.paymentStatus === 'paid' ? 'ชำระแล้ว' : 'รอชำระ'}
                  </Badge>
                  <Button variant="outline" size="sm">
                    เข้าเรียน
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Courses */}
      <Card>
        <CardHeader>
          <CardTitle>คอร์สแนะนำ</CardTitle>
          <CardDescription>คอร์สเรียนที่คุณอาจสนใจ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableCourses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-1">ครูผู้สอน: {course.teacher}</p>
                <p className="text-sm text-gray-600 mb-1">ระยะเวลา: {course.duration}</p>
                <p className="text-sm text-gray-600 mb-3">ตารางเรียน: {course.schedule}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">₿{course.price.toLocaleString()}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                    สมัครเรียน
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
