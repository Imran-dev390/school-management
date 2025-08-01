import React from 'react';

const loginItems = [
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-super-admin-login.png',
    link: 'https://wpschool.weblizar.com/',
    username: 'userdemo',
    password: 'userdemo',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-admin-login.png',
    link: 'https://wpschool.weblizar.com//?_gl=1*wiuwbn*_ga*NDgxMDg1NjcwLjE3NTQwNjM5NTE.*_ga_FPSWNVGJXT*czE3NTQwNjM5NTEkbzEkZzAkdDE3NTQwNjM5NTEkajYwJGwwJGgw',
    username: 'school_administrator',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-teacher-login.png',
    link: 'https://wpschool.weblizar.com/',
    username: 'school_teacher',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-accountant-login.png',
    link: 'https://wpschool.weblizar.com/',
    username: 'accountant',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-student-login.png',
    link: 'https://wpschool.weblizar.com//student-login',
    username: 'student1',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-parents-login.png',
    link: 'https://wpschool.weblizar.com//student-login',
    username: 'parent1',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-receptionist-login.png',
    link: 'https://demo.theschool-management.com/',
    username: 'receptionist',
    password: '123456',
  },
  {
    img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-librarian-login.png',
    link: 'https://wpschool.weblizar.com/',
    username: 'librarian',
    password: '123456',
  },
];

const LoginGrid = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {loginItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={`Login ${idx}`}
                className="mx-auto mb-3 w-[304px] h-[80px] object-contain"
              />
            </a>
            <strong className="block text-sm md:text-base">
              Username: {item.username} <br />
              Pass: {item.password}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginGrid;
