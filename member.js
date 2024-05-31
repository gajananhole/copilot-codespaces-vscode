function skillsMember() {
    return {
        restrict : 'E',
        templateUrl: 'module/skills/views/member.html',
        controller: 'SkillsMamberContoller',
        contollerAs: 'vm',
        bindToContoller: true,
        scope: {
            member: 'm'
        }
    };
}