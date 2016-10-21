import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let lejer = [
            {
                Type: "Privat",
                Fornavn: "Christian",
                Efternavn: "Genter",
                AdresseID: null,
                Identifikation: "1234567890",
                Email: "genter@gmail.com",
                TlfNummer: "27414398",
                LastUpdated: "19/10/2016 13:08:30"
            }
        ];
        return {lejer};
    }
}
