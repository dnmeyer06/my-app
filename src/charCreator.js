import React, { Component } from "react";
import OccupationSection from "./Occupations/occupationSection";
import MessageSection from "./messageSection";

class CharCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupationID: null,
      occupationName: null,
      occupationList: [
        {
          id: 1,
          name: "Accountant",
          skills: [1, 24, 25, 27, 35, 42]
        },
        {
          id: 1,
          name: "Antiquarian",
          skills: [1, 4, 6, 7]
        },
        {
          id: 2,
          name: "Artist"
        },
        {
          id: 3,
          name: "Athlete"
        },
        {
          id: 4,
          name: "Author"
        },
        {
          id: 5,
          name: "Clergyman"
        },
        {
          id: 6,
          name: "Criminal"
        },
        {
          id: 7,
          name: "Dilettante"
        },
        {
          id: 8,
          name: "Doctor of Medicine"
        },
        {
          id: 9,
          name: "Drifter"
        },
        {
          id: 11,
          name: "Engineer"
        },
        {
          id: 12,
          name: "Entertainer"
        },
        {
          id: 13,
          name: "Farmer/Forester"
        },
        {
          id: 14,
          name: "Journalist"
        },
        {
          id: 15,
          name: "Lawyer"
        },
        {
          id: 16,
          name: "Military Officer"
        },
        {
          id: 17,
          name: "Missionary"
        },
        {
          id: 18,
          name: "Musician"
        },
        {
          id: 19,
          name: "Parapsychologist"
        },
        {
          id: 20,
          name: "Pilot"
        },
        {
          id: 21,
          name: "Police Detective"
        },
        {
          id: 22,
          name: "Policeman"
        },
        {
          id: 23,
          name: "Private Investigator"
        }
      ],
      skillList: {
        1: {
          id: 1,
          name: "Accounting",
          base: 0.05,
          desc:
            "Grants understanding of accountancy procedures, and reveals the financial functioning of a business or person. Inspecting the books, one might detect cheated employees, siphoned-off funds, payment of bribes or blackmail, and whether or not the financial condition is better or worse than claimed. Looking through old accounts, one could see how money was gained or lost in the past (grain, slave-trading, whiskey-running, etc.) and to whom and for what payment was made."
        },
        2: {
          id: 2,
          name: "Anthropology",
          base: 0.01,
          desc:
            "Enables the user to identify and understand an individual’s way of life from his behavior. If the skill-user observes another culture from within for a time, or works from accurate records concerning an extinct culture, he or she may make simple predictions about that culture’s ways and morals, even though the evidence may be incomplete. Studying the culture for a month or more, the anthropologist begins to understand how the culture functions and, in combination with Psychology, may predict the actions and beliefs of representatives. Essentially useful only with existing human cultures."
        },
        3: {
          id: 3,
          name: "Appraise",
          base: 0.05,
          desc:
            "Used to estimate the value of a particular item, including quality, material used, and workmanship. Where reelvant, the skill-user could pinpoint the age of the item, assess its historical relevance, and detect forgeries."
        },
        4: {
          id: 4,
          name: "Archaeology",
          base: 0.01,
          desc:
            "Allows dating and identification of artifacts from past cultures and the detecting of fakes. Having thoroughly inspected a site, the user might deduce the purposes and way of life of those who left the remains. Anthropology might aid in this. Archaeology may also help identify written forms of extinct human languages."
        },
        5: {
          id: 5,
          name: "Art / Craft",
          base: 0.05,
          desc:
            "Specify song, some musical instrument, painting, cooking, etc. – any non-literary art which a creative person might seriously pursue through life. With a success, the performance or creation is pleasing and the audience is satisfied. Failure indicates that the artist was off-key or inexpressive. Lovecraft’s artists invoke the traditional muses, but the keeper might allow wider definitions of “art”. The points where Art ends and Craft begins vary with each keeper. The player should note the style or medium – opera singer, oil painter, etc."
        },
        6: {
          id: 6,
          name: "Charm",
          base: 0.15,
          desc: "to Do"
        },
        7: {
          id: 7,
          name: "Climb",
          base: 0.2,
          desc:
            "A climb roll must be attempted every 10 to 30 vertical feet, depending on the difficulty of the climb as the keeper perceives it. Conditions such as firmness of surface, wind, visibility, rain, etc., may be factors."
        },
        8: {
          id: 8,
          name: "Credit Rating",
          base: 0.0,
          desc:
            "Narrowly, how prosperous and confident the investigator seems to be. This is the investigator’s chance to panhandle or get a loan from a bank or business, and it is also the chance for the investigator to pass a bad check or to bluff past a demand for credentials."
        },
        9: {
          id: 9,
          name: "Cthulhu Mythos",
          base: 0.0,
          desc:
            "This skill differs from the others in the game. No starting investigator may take points in Cthulhu Mythos either with occupation points or with personal interest points. There is no check box for Cthulhu Mythos on the investigator sheet, because successful use of the skill does not offer an increase in the investigator’s percentiles in the skill."
        },
        10: {
          id: 10,
          name: "Disguise",
          base: 0.05,
          desc:
            "The user changes posture, costume, and/or voice in order to seem another person or another sort of person. Theatrical makeup may help. Dim lighting definitely helps. Increase the chance for detection if the disguise involves significant differences in sex, age, size, or language. To look like a specific person, as opposed to a particular kind of person, halve the Disguise skill percentage – this sort of illusion is best left maintained by distance."
        },
        11: {
          id: 11,
          name: "Dodge",
          //base: dex * 2%
          desc:
            "Allows an investigator instinctively to evade blows, thrown missiles, attacks from ambush, and so forth. A character attempting Dodge in a combat round may also parry, but not attack. Dodge can increase through experience, like other skills. If an attack can be seen, a character can try to dodge it. Against guns, a defender may try to dodge only the first bullet fired at him in a round."
        },
        12: {
          id: 12,
          name: "Drive Automobile",
          base: 0.2,
          desc:
            "Anyone with this skill can drive a car or light truck, make ordinary maneuvers, and cope with ordinary vehicle problems. If the investigator wants to lose a pursuer or trail someone, both participants might attempt Driving rolls until one fails and the other succeeds. Dangerous maneuvers always call for Drive rolls."
        },
        13: {
          id: 13,
          name: "Electrical Repair ",
          base: 0.1,
          desc:
            "Enables the investigator to repair or reconfigure electrical equipment such as auto ignitions, electric motors, fuse boxes, and burglar alarms. To fix an electrical device may require special parts or tools. Jobs in the 1920s may call for this skill and for Mechanical Repair in combination."
        },
        14: {
          id: 14,
          name: "Fast Talk",
          base: 0.05,
          desc:
            "Causes a target to agree with the user for a short time. Without reflecting, the target signs the paper, allows the trespass, lends the automobile, or whatever else within reason is asked. Given a little more time to think and the benefit of a successful Idea roll, the target comes to his or her senses, and the Fast Talk loses effect."
        },
        15: {
          id: 15,
          name: "Fighting (Brawl)",
          base: 0.25,
          desc: "to do"
        },
        16: {
          id: 16,
          name: "Firearms (Handgun)",
          base: 0.2,
          desc: "to do"
        },
        17: {
          id: 17,
          name: "Firearms (Rifle/Shotgun)",
          base: 0.25,
          desc: "to do"
        },
        18: {
          id: 18,
          name: "First Aid",
          base: 0.3,
          desc:
            "The percentage change of awakening an unconscious or stunned comrade, setting a broken limb, treating burn damage, resuscitating a drowning victim, etc. First Aid has no effect on diseases or subtle physical ailments, nor on poisonings unless the keeper allows the roll. Treated with First Aid, an investigator’s healing rate stays at 1D3 points per week. (Moved to a hospital and successfully treated with Medicine, that rate rises to 2D3 per week.)"
        },
        19: {
          id: 19,
          name: "History",
          base: 0.05,
          desc:
            "Enables an investigator to remember the significance of a country, city, region, or person, as pertinent. Lessen the chance if the facts are obscure. A successful History roll might be used to help identify tools, techniques, or ideas familiar to ancestors, but little known today."
        },
        20: {
          id: 20,
          name: "Intimidate",
          base: 0.15,
          desc: "to do"
        },
        21: {
          id: 21,
          name: "Jump",
          base: 0.2,
          desc:
            "With a success, the investigator can leap up vertically and grab to his or her height, safely leap down vertically to his or her height, jump horizontally from a standing start across a gap for a distance equal to the jumper’s own height, or run and then jump horizontally to a distance of twice the jumper’s own height. If falling from a height, a successful Jump prepares for the fall, subtracting 1D6 from the loss to injury."
        },
        22: {
          id: 22,
          name: "Language (Other)",
          base: 0.01,
          desc:
            "Specify the language. An individual can know any number of languages. The skill represents the user’s chance to understand, speak, read, and write in a language other than his or her own. Ancient or unknown languages comparable to Aklo should not be chosen, but ordinary earthly languages may be. Occasionally the keeper may determine that a number of separate complex points exist in a document or speech, and call for several such language rolls, one for each point. Similarly, the keeper may momentarily reduce the user’s skill in a language if archaic speech or writing in that language is encountered. A single successful Other Language roll normally comprehends an entire book."
        },
        23: {
          id: 23,
          name: "Language (Own)",
          base: 0.05,
          desc:
            "Specify the language. In infancy and early childhood, most humans use a single language. For most people in the United States, the tongue is some dialect of English. The tongue chosen by the player for the investigator’s Own Language automatically starts at EDU x5: thereafter the investigator understands, speaks, reads, and writes at that percentage or higher."
        },
        24: {
          id: 24,
          name: "Law",
          base: 0.05,
          desc:
            "Represents the chance of knowing pertinent law, precedent, legal maneuver, or court procedure. The practice of law as a profession can lead to great rewards and political office, but it requires intense application over many years. A high Credit Rating is crucial to it. No other profession is so easily sullied by the bizarre behavior common to investigators. In the United States, one’s practice of law must be sanctioned by the State Bar of a particular commonwealth or state. In another country, halve the chance for success with this skill, unless the character has spent 30-INT months studying that nation’s law."
        },
        25: {
          id: 25,
          name: "Library Use",
          base: 0.2,
          desc:
            "In many ways this is the most important skill in the game. Library Use enables an investigator to find a given book, newspaper, or reference in a library or collection of documents, assuming that the item is there. Each use of this skill marks four hours of continuous search. An investigator rarely gets more than two tries per day."
        },
        27: {
          id: 27,
          name: "Listen",
          base: 0.2,
          desc:
            "Measures the ability of an investigator to interpret and understand sound, including overheard conversations, mutters behind a closed door, and whispered words in a café. The keeper may use it to determine the course of an impending encounter: was your investigator awakened by that crackling twig? By extension, a high Listen can indicate general awareness in a character."
        },
        28: {
          id: 28,
          name: "Locksmith",
          base: 0.01,
          desc:
            "The user may repair locks, make keys, or open locks with the aid of skeleton keys, picks, and other tools. Especially difficult locks may lower the chance for success. A locksmith can open car doors, hot-wire autos, jimmy library windows, figure out Chinese puzzle boxes, and penetrate ordinary commercial alarm systems. Sophisticated safes, vaults, and other serious defensive systems are beyond your skill. Keepers might combine Locksmith with DEX or POW rolls to cover a variety of surreptitious situations."
        },
        29: {
          id: 29,
          name: "Mechanical Repair",
          base: 0.1,
          desc:
            "This allows the investigator to repair a broken machine, or to create a new one. Basic carpentry and plumbing projects can be performed. Special tools or parts may be required. This skill can open common household locks, but nothing more advanced. See the Locksmith skill. Mechanical Repair is a companion skill to Electrical Repair, and both may be necessary to fix complex devices such as an auto or an aircraft."
        },
        30: {
          id: 30,
          name: "Medicine",
          base: 0.01,
          desc:
            "The user diagnoses and treats accidents, injuries, diseases, poisonings, etc., and makes public health recommendations. If an era has no good treatment for a malady, the effort is limited, uncertain, or inconclusive. Failure in application requires that the user wait some amount of time to try again, but another practitioner could make his or her attempt in the next round."
        },
        31: {
          id: 31,
          name: "Natural History",
          base: 0.05,
          desc:
            "Originally the study of plant and animal life in its environment. By the nineteenth century this study had long separated into many academic disciplines. As a game skill it represents the traditional knowledge and personal observation of farmers, fishermen, inspired amateurs, and hobbyists. It identifies species, habits, and habitats in a general way and is able to guess at what may be important to a particular species. Natural History information may or may not be accurate – this is the region of appreciation, judgment, tradition, and enthusiasm. Use Natural History to judge horseflesh at a country fair, or to decide whether a butterfly collection is excellent or just excellently framed."
        },
        32: {
          id: 32,
          name: "Navigate",
          base: 0.1,
          desc:
            "Allows the user to find his or her way in storms or clear weather, in day at night. Those of higher skill are familiar with the astronomical tables, charts, instruments, and satellite location gear as they exist in the era of play. One could also use this skill to measure and map an area, whether an island of many square miles or the interior of a single room."
        },
        33: {
          id: 33,
          name: "Occult",
          base: 0.05,
          desc:
            "The user recognizes occult paraphernalia, words, and concepts, and identifies grimoires of magic and occult codes when he sees them. The occultist is familiar with the families of secret knowledge passed down from Egypt and Sumer, from the Medieval and Renaissance West, and perhaps from Asia and Africa as well."
        },
        34: {
          id: 34,
          name: "Operate Heavy Machine",
          base: 0.01,
          desc:
            "Required to drive and operate a tank, backhoe, steam shovel, or other large-scale construction machine. Once the skill is sufficiently known, no skill roll is needed except for difficult and dangerous tasks, or bad or dangerous conditions. For very difficult sorts of machines, the keeper may decide to lower an investigator’s nominal skill if the problems encountered are mostly unfamiliar ones: someone used to running a bulldozer, for instance, will not be quickly competent with the steam turbines of a ship’s engine room."
        },
        35: {
          id: 35,
          name: "Persuade",
          base: 0.1,
          desc:
            "Use Persuade to convince a target about a particular idea, concept, or belief. (Like Fast Talk, Persuade may be employed without reference to truth.) Unlike Fast Talk, Persuade’s effect lingers indefinitely and insidiously, for years perhaps, until events or another Persuade turn the target’s mind in another direction. The successful application of Persuade might take an hour to several days, depending on what’s being attempted."
        },
        36: {
          id: 36,
          name: "Pilot",
          base: 0.01,
          desc:
            "The air/water equivalent of Drive Automobile, this is the maneuver skill for flying or floating craft. An investigator might have several versions of this skill in the spaces on the investigator sheet. Each starts at 01% and counts as a different skill, and should be listed independently: Pilot Balloon, Pilot Dirigible, Pilot Civil Prop, Pilot Steam Ship, Pilot Sailboat, etc."
        },
        37: {
          id: 37,
          name: "Psychology",
          base: 0.1,
          desc:
            "A skill common to all humans, it allows the user to study an individual and form an idea of his or her motives and character. In general, the keeper will make the rolls for this skill and keep the results secret, announcing only the information, true or false, that the user gained by employing it. Players should not expect that this skill penetrates skillful deceit unless the person’s confidence somehow has been shaken."
        },
        38: {
          id: 38,
          name: "Psychoanalysis",
          base: 0.01,
          desc:
            "Enables the user to staunch a temporary and indefinite insanity for a day or so. If the condition persists beyond that period, the unfortunate person relapses, and only time heals the insanity. This emergency treatment takes up to an hour to perform, and can be applied just once per person per incident of insanity, no matter how many analysts are available."
        },
        39: {
          id: 39,
          name: "Ride",
          base: 0.05,
          desc:
            "Intended to apply to saddle horses, donkeys, or mules. A camel might be ridden successfully at a lowered percentage chance. The skill grants knowledge of basic care of the riding animal, riding gear, and how to handle the steed at the gallop or on difficult terrain."
        },
        40: {
          id: 40,
          name: "Science",
          base: 0.01,
          desc: "to do"
        },
        41: {
          id: 41,
          name: "Sleight of Hand",
          base: 0.1,
          desc: "to do"
        },
        42: {
          id: 42,
          name: "Spot Hidden",
          base: 0.25,
          desc:
            "This skill allows the user to spot a secret door or compartment, notice a hidden intruder, find an inconspicuous clue, recognize a repainted automobile, become aware of ambushers, notice a bulging pocket, or anything similar. This is an important skill in the game."
        },
        43: {
          id: 43,
          name: "Stealth",
          base: 0.2,
          desc:
            "The art of moving quietly, without alerting those who might hear. Used in combination with Hide, the investigator makes a single D100 roll, the result of whichis matched against the investigator’s percentages in both skills. Use this combination when silent movement is necessary."
        },
        44: {
          id: 44,
          name: "Survival",
          base: 0.1,
          desc: "To do"
        },
        45: {
          id: 45,
          name: "Swim",
          base: 0.2,
          desc:
            "The ability to float and to move through water or other liquid. Only roll Swim in times of crisis or danger when the keeper thinks it appropriate. A failing Swim roll starts the drowning procedure. Someone drowning may receive a Swim roll attempt each round – with a success, he or she reaches the surface and breathes. With a second success, he or she can begin to move through the water. If the second Swim roll fails, drowning begins again."
        },
        46: {
          id: 46,
          name: "Throw",
          base: 0.2,
          desc:
            "To hit a target with an object, or to hit a target with the right part of the object thrown (such as the blade of a knife or hatchet), use Throw. A palm-sized object of reasonable balance can be hurled three yards for each STR point exceeding the object’s SIZ. An object designed to be thrown can be hurled up to six yards for each STR point in excess of the object’s SIZ, and perhaps bounce on for more. Keepers must choose the multiplier suitable to the baseball, javelin, etc."
        },
        47: {
          id: 47,
          name: "Track",
          base: 0.1,
          desc:
            "With Track, an investigator can follow a person, vehicle, or animal over soft earth and leaves. Subtract 10% from the chance for success for each day that has passed since the tracks were made. Rain may made tracking impossible. A being cannot be tracked across water, over concrete, or at night except in unusual circumstances."
        }
      },
      messages: [
        "Greetings investigator, I'm gratified that you have responded to my summons. Please, tell me more about your background.",
        "test message 2"
      ],
      page: 0,
      skillSpecialitiesIDs: null,
      skillSpecialitiesNames: null
    };
  }

  selectOccupation = (id, name, skills) => {
    this.setState({
      occupationID: id,
      occupationName: name,
      skillSpecialitiesIDs: skills,
      skillSpecialitiesNames: skills.map(skillID => {
        return this.state.skillList[skillID].name;
      })
    });
  };

  render() {
    return (
      <div className="charCreator container">
        <MessageSection message={this.state.messages[this.state.page]} />
        <OccupationSection
          selectOccupation={this.selectOccupation}
          occupationList={this.state.occupationList}
          skillList={this.state.skillSpecialitiesNames}
          occupationName={this.state.occupationName}
        />
        <div className="row">
          <div className="nextButton col-1-sm offset-11">
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CharCreator;
