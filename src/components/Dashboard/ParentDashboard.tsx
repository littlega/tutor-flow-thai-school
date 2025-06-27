
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Calendar, CreditCard, TrendingUp } from 'lucide-react';

const ParentDashboard = () => {
  const children = [
    {
      id: '1',
      name: 'น้องใหม่',
      grade: 'ม.3',
      courses: [
        {
          name: 'คณิตศาสตร์',
          progress: 78,
          nextClass: '2024-01-15 14:00',
          paymentStatus: 'paid'
        },
        {
          name: 'ภาษาอังกฤษ',
          progress: 65,
          nextClass: '2024-01-16 10:00',
          paymentStatus: 'pending'
        }
      ]
    }
  ];

  const upcomingPayments = [
    {
      id: '1',
      courseName: 'ภาษาอังกฤษ ม.3',
      studentName: 'น้องใหม่',
      amount: 2800,
      dueDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: '2',
      courseName: 'วิทยาศาสตร์ ม.3',
      studentName: 'น้องใหม่',
      amount: 2500,
      dueDate: '2024-01-25',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ดผู้ปกครอง</h1>
        <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
          <CreditCard className="w-4 h-4 mr-2" />
          ชำระค่าเรียน
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">บุตรหลาน</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">กำลังเรียน</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">คอร์สทั้งหมด</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">กำลังเรียน</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ค่าใช้จ่ายเดือนนี้</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₿5,600</div>
            <p className="text-xs text-muted-foreground">+800 จากเดือนที่แล้ว</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ผลการเรียน</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">คะแนนเฉลี่ย</p>
          </CardContent>
        </Card>
      </div>

      {/* Children Progress */}
      <Card>
        <CardHeader>
          <CardTitle>ความก้าวหน้าการเรียน</CardTitle>
          <CardDescription>ติดตามผลการเรียนของบุตรหลาน</CardDescription>
        </CardHeader>
        <CardContent>
          {children.map((child) => (
            <div key={child.id} className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{child.name}</h3>
                  <p className="text-sm text-gray-600">ชั้น {child.grade}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {child.courses.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{course.name}</h4>
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
                    <Badge 
                      variant={course.paymentStatus === 'paid' ? 'default' : 'destructive'}
                      className="ml-4"
                    >
                      {course.paymentStatus === 'paid' ? 'ชำระแล้ว' : 'รอชำระ'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Payments */}
      <Card>
        <CardHeader>
          <CardTitle>การชำระเงินที่ต้องชำระ</CardTitle>
          <CardDescription>รายการค่าเรียนที่ต้องชำระ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium">{payment.courseName}</h4>
                  <p className="text-sm text-gray-600">นักเรียน: {payment.studentName}</p>
                  <p className="text-sm text-gray-500">
                    กำหนดชำระ: {new Date(payment.dueDate).toLocaleDateString('th-TH')}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold text-lg">₿{payment.amount.toLocaleString()}</p>
                    <Badge 
                      variant={payment.status === 'pending' ? 'destructive' : 'secondary'}
                    >
                      {payment.status === 'pending' ? 'เร่งด่วน' : 'กำลังมาถึง'}
                    </Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                  >
                    ชำระเงิน
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

export default ParentDashboard;
