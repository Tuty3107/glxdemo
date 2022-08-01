const films = [
    {
        id:1,
        rate:'C13',
        ENtitle:'Thor: Love and Thunder',
        VNtitle:"Thor: Tình yêu và sấm sét",
        src:'img/450_1657525360315.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  
                [
                    {
                        day: "Chủ nhật, 24/07/2022",
                        time: ["17:30", "19:45", "22:00"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ hai, 25/07/2022",
                        time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                        others: "2D - Phụ đề"
                     },
                    {
                        day: "Thứ ba, 26/07/2022",
                        time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                        others: "2D - Phụ đề"
                    }
                ]            
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                    {
                        day: "Chủ nhật, 24/07/2022",
                        time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ hai, 25/07/2022",
                        time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ ba, 26/07/2022",
                        time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                        others: "2D - Phụ đề"
                    }
                ]  
            },{
                name: "Galaxy Quang Trung",
                session: [
                    {
                        day: "Chủ nhật, 24/07/2022",
                        time: ["19:30", "22:00"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ hai, 25/07/2022",
                        time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ ba, 26/07/2022",
                        time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                        others: "2D - Phụ đề"
                    }
                ]
            }
        ],
    },
    {
        id:2,
        rate:'',
        ENtitle:'Minions: the rise of gru',
        VNtitle:"Minions: sự trỗi dậy của gru",
        src:'img/1800x1200_1655470323231.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session: [
                    {
                         day: "Chủ nhật, 24/07/2022",
                        time: ["17:30", "19:45", "22:00"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ hai, 25/07/2022",
                        time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ ba, 26/07/2022",
                        time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                        others: "2D - Phụ đề"
                    }
                ]
                          
            },{
                name: "Galaxy Kinh Dương Vương",
                session: [
                    {
                         day: "Chủ nhật, 24/07/2022",
                        time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ hai, 25/07/2022",
                        time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                        others: "2D - Phụ đề"
                    },
                    {
                        day: "Thứ ba, 26/07/2022",
                        time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                        others: "2D - Phụ đề"
                    }
                ]
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
            }
        ],
    },
    {
        id:3,
        rate:'C13',
        ENtitle:'Dectective conan movie 25: the bride of halloween',
        VNtitle:"Thám tử lừng danh conan: nàng dâu halloween",
        src:'img/1350wx900h_1655176461942.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                            
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session: [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ],
    },
    {
        id:4,
        rate:'C16',
        ENtitle:'KKN CURSE OF DANCING VILLAGE',
        VNtitle:"LINH HỒN VŨ NỮ",
        src:'img/1800x1200_1655470323231.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                            
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ],
    },
    {
        id:5,
        rate:'C13',
        ENtitle:'',
        VNtitle:"lÀ MÂY TRÊN BẦU TRỜI CỦA AI ĐÓ",
        src:'img/1800x1200---copy_1656496629031.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                            
            },{
                name: "Galaxy Kinh Dương Vương",
                session: [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                  ]
                
            }
        ],
    },
    {
        id:6,
        rate:'C18',
        ENtitle:'KAREM OF POSESIÓN',
        VNtitle:"KAREM: VẬT CHỨA TỬ THẦN",
        src:'img/1350wx900h_1656923606085.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                            
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ],
    },
    {
        id:7,
        rate:'C16',
        ENtitle:'DECISION TO LEAVE',
        VNtitle:"QUYẾT TÂM CHIA TAY",
        src:'img/1800wx1200h1_1656065042170.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session:  [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                           
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ],
    },
    {
        id:8,
        rate:'C18',
        ENtitle:'THE WITCH: PART2. THE OTHER ONE',
        VNtitle:"SÁT THỦ NHÂN TẠO 2: MẪU VẬT CÒN LẠI",
        src:'img/1800x1200_1655470323231.jpg',
        cinema: [
            {
                name: "Galaxy Nguyễn Du",
                session: [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "19:45", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "20:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },
            {
                name: "Galaxy Tân Bình",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "19:45", "22:00"],
                            others: "2D - Phụ đề"
                        },
                            {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                            
            },{
                name: "Galaxy Kinh Dương Vương",
                session: [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session: [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ],
    },
    {
        id:9,
        rate:'',
        VNtitle:'EM VÀ TRỊNH',
        ENtitle:'',
        src:'img/1800x1200---copy_1656496629031.jpg',
        cinema: [
            {
                name: "Galaxy Tân Bình",
                session: [
                            {
                                day: "Chủ nhật, 24/07/2022",
                                time: ["17:30", "19:45", "22:00"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ hai, 25/07/2022",
                                time: ["10:45", "13:15", "15:30", "17:45", "20:15","21:30", "22:15"],
                                others: "2D - Phụ đề"
                            },
                            {
                                day: "Thứ ba, 26/07/2022",
                                time: ["10:45", "13:15", "15:30", "20:15", "22:15"],
                                others: "2D - Phụ đề"
                            }
                        ]
                          
            },{
                name: "Galaxy Kinh Dương Vương",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["17:30", "18:45", "20:00", "21:00", "22:15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["10:45", "13:15", "15:30", "16:30", "17:45","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            },{
                name: "Galaxy Quang Trung",
                session:  [
                        {
                            day: "Chủ nhật, 24/07/2022",
                            time: ["19:30", "22:00"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ hai, 25/07/2022",
                            time: ["11:30", "14:45", "17:15","19:30", "20:30", "22,15"],
                            others: "2D - Phụ đề"
                        },
                        {
                            day: "Thứ ba, 26/07/2022",
                            time: ["10:45", "13:15", "15:30", "17:45","20:00", "22:15"],
                            others: "2D - Phụ đề"
                        }
                    ]
                
            }
        ]
    } 
]

export {films}