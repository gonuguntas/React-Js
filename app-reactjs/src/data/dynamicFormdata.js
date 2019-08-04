

export default {
    header1: {
        title: "Level 1",
        sections: {
            AAA: {
                title: "Form 1",
                formData: {
                    row1: {
                        firstName: {
                            label: "First Name",
                            type: "text"
                        },
                        lastName: {
                            label: "Last Name",
                            type: "text"
                        }
                    },
                    row2: {
                        information: {
                            label: "Information",
                            type: "info",
                            info: "Information About Form"
                        }
                    },
                    row3: {
                        gender: {
                            label: "Gender",
                            type: "radio",
                            options: [
                                'Male',
                                'Female'
                            ]
                        }

                    }
                }
            },
            BBB: {
                title: "Form 2"
            },
            CCC: {
                title: "Form 3"
            },
        }
    },
    header2: {
        title: "Level 2",
        
    },
    header3: {
        title: "Level 3"
    }
}