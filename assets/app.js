const register = Vue.createApp({
    data() {
        return {
            studentName: 'JOki',
            vacation: {
                VacationTypeID: 1,
                StudentID: 277,
                FromDate: "0000-00-00",
                ToDate: "000-00-00",
            }
        }
    },
    methods: {
        async addVacation() {
            const url = 'https://api-sbw-plc.sbw.media/Vacation';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.vacation),
            });
            if (response.ok) {
                console.log('Vacation added successfully');
            } else {
                console.error('Failed to add vacation');
            }

        }
    },
    mounted() {
        this.vacation.StudentID = localStorage.getItem('StudentID');
    }

}).mount('#register');