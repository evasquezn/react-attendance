import { IAttendanceLogAPI } from "../interfaces"
import { IAttendanceLogEntry, ICourseData, ICourseActivityEntry } from "models";
import { addDays } from "../../utils"

export class AttendanceLogAPI implements IAttendanceLogAPI {
    constructor(baseUrl: string) { }
    
    getAttendanceLogs(studentIds: string[], startDate: Date, endDate: Date): Promise<IAttendanceLogEntry[]> {
        const data = [
            {
                id: "12345661",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345662",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345663",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345664",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345665",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345666",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345667",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345668",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345669",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345670",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345671",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345672",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            },
            {
                id: "12345673",
                dailyActiveTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 2700,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 3600,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    }
                ],
                dailyIdleTime: [
                    {
                        duration: 0,
                        date: new Date("04/04/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/05/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/06/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/07/2021")
                    },
                    {
                        duration: 1800,
                        date: new Date("04/08/2021")
                    },
                    {
                        duration: 900,
                        date: new Date("04/09/2021")
                    },
                    {
                        duration: 0,
                        date: new Date("04/10/2021")
                    },

                ],
                courseData: [
                    {
                        id:"ECO101",
                        name: "Econonomics 101",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_01",
                                        name: "Econonomics 101: Ch.01"
                                    }
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/06/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_02",
                                        name: "Econonomics 101: Ch.02"
                                    },
                                    {
                                        id: "ECON_101_03",
                                        name: "Econonomics 101: Ch.03"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/07/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_04",
                                        name: "Econonomics 101: Ch.04"
                                    }
                                ]
                            },
                            {
                                duration: 900,
                                date: new Date("04/09/2021"),
                                activities: [
                                    {
                                        id: "ECON_101_05",
                                        name: "Econonomics 101: Ch.05"
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }
                        ]
                    },
                    {
                        id:"ALGII",
                        name: "Algebra II",
                        activityEntries: [
                            {
                                duration: 0,
                                date: new Date("04/04/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/05/2021"),
                                activities: [
                                    {
                                        id:"CH01",
                                        name: "Algebra II: Chapter 01"
                                    },
                                    {
                                        id:"CH02",
                                        name: "Algebra II: Chapter 02"
                                    },
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/06/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 1800,
                                date: new Date("04/07/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 03",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 04",
                                    }
                                ]
                            },
                            {
                                duration: 2700,
                                date: new Date("04/08/2021"),
                                activities: [
                                    {
                                        id:"CH03",
                                        name: "Algebra II: Chapter 05",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 06",
                                    },
                                    {
                                        id:"CH04",
                                        name: "Algebra II: Chapter 07",
                                    }
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/09/2021"),
                                activities: [
                                ]
                            },
                            {
                                duration: 0,
                                date: new Date("04/10/2021"),
                                activities: [
                                ]
                            }                                        
                        ]
                    },
    
                ]
            }
        ];
   
        return new Promise<IAttendanceLogEntry[]>((resolve, _) => {
            const filteredData = data.filter((x: { id: string; }) => studentIds.includes(x.id));
            setInterval(() => resolve(filteredData), 1000);
        });
    };
}