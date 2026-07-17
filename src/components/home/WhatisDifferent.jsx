import '../../styles/home/whatisdifferent.css';

function WhatIsDifferent() {
  return (
    <div className="whatisdifferent">
      <h1 className="whatisdifferent-headline">
        Hvað gerir SWIFT vörtumeðferð frábrugðna öðrum meðferðum?
      </h1>

      <p className="whatisdifferent-text-1">
        SWIFT hefur verið frábær viðbót við vörtumeðferð af mörgum ástæðum:
      </p>

      <ul className="whatisdifferent-list">
        <li>
          Meðferðartíminn er stuttur og krefst engrar hvíldar, sem þýðir að þú
          getur farið beint aftur í íþróttir eða aðra virkni strax eftir
          meðferðina.
        </li>

        <li>
          Enginn sársauki eftir meðferðina en doði og hiti getur komið á svæðið
          sem getur verið í einhverja daga eftir.
        </li>

        <li>Minni hætta á sýkingu og öramyndun.</li>

        <li>Enginn skaði verður á nærliggjandi húð og vefjum.</li>

        <li>Engar umbúðir eru nauðsynlegar.</li>

        <li>Enginn reykur eða bruni.</li>
      </ul>
    </div>
  );
}

export default WhatIsDifferent;