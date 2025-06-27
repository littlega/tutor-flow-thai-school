
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Book, Users, Calendar, DollarSign } from 'lucide-react';

const TeacherDashboard = () => {
  const courses = [
    {
      id: '1',
      title: 'คณิตศาสตร์ ม.3',
      students: 15,
      maxStudents: 20,
      nextClass: '2024-01-15 14:00',
      status: 'active'
    },
    {
      id: '2',
      title: 'ฟิสิกส์ ม.6',
      students: 18,
      maxStudents: 20,
      nextClass: '2024-01-16 16:00',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ดครู</h1>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
          <Book className="w-4 h-4 mr-2" />
          สร้างคอร์สใหม่
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">คอร์สทั้งหมด</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">นักเรียนทั้งหมด</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">คลาสวันนี้</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">เหลือ 2 คลาส</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">รายได้เดือนนี้</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₿48,500</div>
            <p className="text-xs text-muted-foreground">+15% จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>
      </div>

      {/* Courses List */}
      <Card>
        <CardHeader>
          <CardTitle>คอร์สที่สอน</CardTitle>
          <CardDescription>จัดการคอร์สเรียนและนักเรียน</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-600">
                    นักเรียน: {course.students}/{course.maxStudents} คน
                  </p>
                  <p className="text-sm text-gray-500">
                    คลาสถัดไป: {new Date(course.nextClass).toLocaleDateString('th-TH')} เวลา {new Date(course.nextClass).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">
                    {course.students >= course.maxStudents ? 'เต็ม' : 'เปิดรับ'}
                  </Badge>
                  <Button variant="outline" size="sm">
                    จัดการ
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

export default TeacherDashboard;
