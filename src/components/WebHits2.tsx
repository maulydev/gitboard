/* eslint-disable @next/next/no-img-element */
const WebHits2 = () => {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <div className="flex flex-col">
      {!isProduction && (
        <a href="https://www.freecounterstat.com" title="free counter">
          <img
          className="w-32"
            src="https://counter4.optistats.ovh/private/freecounterstat.php?c=wb3tmnfgcxymr1c8exug93bde774g61k"
            title="free counter"
            alt="free counter"
          />
        </a>
      )}
    </div>
  );
};

export default WebHits2;
