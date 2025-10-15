import React from 'react';

// TypeScript interface for team member data
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  alt: string;
}

// Props interface for TeamMember component
interface TeamMemberProps {
  member: TeamMember;
}

const Team: React.FC = () => {
  // Team members data - easy to add, edit, or remove members
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Santosh Gouda",
      position: "Managing Director",
      image: "/team1.png",
      alt: "Santosh image"
    },
    {
      id: 2,
      name: "Suraj Adhikari",
      position: "CEO Zaalima Groups",
      image: "/team2.png",
      alt: "Suraj image"
    },
    {
      id: 3,
      name: "Archana Mishra",
      position: "Human Resources",
      image: "/team3.jpg",
      alt: "Archana image"
    },
    {
      id: 4,
      name: "Wade Warren",
      position: "CEO",
      image: "https://pagedone.io/asset/uploads/1698650109.png",
      alt: "Wade image"
    },
    {
      id: 5,
      name: "Leslie Alexander",
      position: "Customer Support",
      image: "https://pagedone.io/asset/uploads/1698650146.png",
      alt: "Leslie image"
    },
    {
      id: 6,
      name: "Guy Hawkins",
      position: "HR",
      image: "https://pagedone.io/asset/uploads/1698650184.png",
      alt: "Guy image"
    },
    {
      id: 7,
      name: "Ronald Richards",
      position: "CO-Founder",
      image: "https://pagedone.io/asset/uploads/1698650213.png",
      alt: "Ronald image"
    },
    {
      id: 8,
      name: "Devon Lane",
      position: "UI Designer",
      image: "https://pagedone.io/asset/uploads/1698650242.png",
      alt: "Devon image"
    },
    {
      id: 9,
      name: "Dianne Russell",
      position: "Product Designer",
      image: "https://pagedone.io/asset/uploads/1698650271.png",
      alt: "Dianne image"
    }
  ];

  // Component for individual team member
  const TeamMember: React.FC<TeamMemberProps> = ({ member }) => (
    <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
      <div className="relative mb-5">
        <img
          src={member.image}
          alt={member.alt}
          className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
        />
      </div>
      <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
        {member.name}
      </h4>
      <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
        {member.position}
      </span>
    </div>
  );

  return (
    <section className="py-4" id='team'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-6">
            Meet the brains
          </h2>
          <p className="text-lg text-gray-500 text-center">
            These people work on making our service best.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
          {teamMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;